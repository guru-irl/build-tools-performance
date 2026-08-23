import React from 'react';
const LABEL_16458 = 'component_16458';
export function Component16458({ value = 16458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16458, 'data-value': derived.doubled }, children);
}
export default Component16458;
