import React from 'react';
const LABEL_28768 = 'component_28768';
export function Component28768({ value = 28768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28768, 'data-value': derived.doubled }, children);
}
export default Component28768;
