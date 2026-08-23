import React from 'react';
const LABEL_19561 = 'component_19561';
export function Component19561({ value = 19561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19561, 'data-value': derived.doubled }, children);
}
export default Component19561;
