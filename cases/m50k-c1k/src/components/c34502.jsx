import React from 'react';
const LABEL_34502 = 'component_34502';
export function Component34502({ value = 34502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34502, 'data-value': derived.doubled }, children);
}
export default Component34502;
