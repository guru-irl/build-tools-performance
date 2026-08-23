import React from 'react';
const LABEL_14820 = 'component_14820';
export function Component14820({ value = 14820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14820, 'data-value': derived.doubled }, children);
}
export default Component14820;
