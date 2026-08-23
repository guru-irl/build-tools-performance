import React from 'react';
const LABEL_35035 = 'component_35035';
export function Component35035({ value = 35035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35035, 'data-value': derived.doubled }, children);
}
export default Component35035;
