import React from 'react';
const LABEL_19549 = 'component_19549';
export function Component19549({ value = 19549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19549, 'data-value': derived.doubled }, children);
}
export default Component19549;
