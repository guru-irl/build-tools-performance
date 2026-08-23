import React from 'react';
const LABEL_20215 = 'component_20215';
export function Component20215({ value = 20215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20215, 'data-value': derived.doubled }, children);
}
export default Component20215;
