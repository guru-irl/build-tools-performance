import React from 'react';
const LABEL_30106 = 'component_30106';
export function Component30106({ value = 30106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30106, 'data-value': derived.doubled }, children);
}
export default Component30106;
