import React from 'react';
const LABEL_40072 = 'component_40072';
export function Component40072({ value = 40072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40072, 'data-value': derived.doubled }, children);
}
export default Component40072;
