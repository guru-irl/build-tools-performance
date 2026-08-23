import React from 'react';
const LABEL_7502 = 'component_7502';
export function Component7502({ value = 7502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7502, 'data-value': derived.doubled }, children);
}
export default Component7502;
