import React from 'react';
const LABEL_40699 = 'component_40699';
export function Component40699({ value = 40699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40699, 'data-value': derived.doubled }, children);
}
export default Component40699;
