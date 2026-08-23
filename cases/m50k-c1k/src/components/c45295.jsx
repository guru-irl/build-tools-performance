import React from 'react';
const LABEL_45295 = 'component_45295';
export function Component45295({ value = 45295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45295, 'data-value': derived.doubled }, children);
}
export default Component45295;
