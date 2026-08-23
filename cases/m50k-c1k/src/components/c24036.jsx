import React from 'react';
const LABEL_24036 = 'component_24036';
export function Component24036({ value = 24036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24036, 'data-value': derived.doubled }, children);
}
export default Component24036;
