import React from 'react';
const LABEL_5072 = 'component_5072';
export function Component5072({ value = 5072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5072, 'data-value': derived.doubled }, children);
}
export default Component5072;
