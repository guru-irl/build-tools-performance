import React from 'react';
const LABEL_36086 = 'component_36086';
export function Component36086({ value = 36086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36086, 'data-value': derived.doubled }, children);
}
export default Component36086;
