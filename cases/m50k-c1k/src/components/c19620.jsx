import React from 'react';
const LABEL_19620 = 'component_19620';
export function Component19620({ value = 19620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19620, 'data-value': derived.doubled }, children);
}
export default Component19620;
