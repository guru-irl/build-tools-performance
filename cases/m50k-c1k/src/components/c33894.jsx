import React from 'react';
const LABEL_33894 = 'component_33894';
export function Component33894({ value = 33894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33894, 'data-value': derived.doubled }, children);
}
export default Component33894;
