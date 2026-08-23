import React from 'react';
const LABEL_26036 = 'component_26036';
export function Component26036({ value = 26036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26036, 'data-value': derived.doubled }, children);
}
export default Component26036;
