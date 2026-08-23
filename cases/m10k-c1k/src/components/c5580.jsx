import React from 'react';
const LABEL_5580 = 'component_5580';
export function Component5580({ value = 5580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5580, 'data-value': derived.doubled }, children);
}
export default Component5580;
