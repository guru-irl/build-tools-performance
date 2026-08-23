import React from 'react';
const LABEL_28024 = 'component_28024';
export function Component28024({ value = 28024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28024, 'data-value': derived.doubled }, children);
}
export default Component28024;
