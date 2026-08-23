import React from 'react';
const LABEL_35620 = 'component_35620';
export function Component35620({ value = 35620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35620, 'data-value': derived.doubled }, children);
}
export default Component35620;
