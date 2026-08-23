import React from 'react';
const LABEL_19748 = 'component_19748';
export function Component19748({ value = 19748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19748, 'data-value': derived.doubled }, children);
}
export default Component19748;
