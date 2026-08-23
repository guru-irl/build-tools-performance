import React from 'react';
const LABEL_34295 = 'component_34295';
export function Component34295({ value = 34295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34295, 'data-value': derived.doubled }, children);
}
export default Component34295;
