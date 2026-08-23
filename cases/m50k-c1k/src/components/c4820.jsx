import React from 'react';
const LABEL_4820 = 'component_4820';
export function Component4820({ value = 4820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4820, 'data-value': derived.doubled }, children);
}
export default Component4820;
