import React from 'react';
const LABEL_5313 = 'component_5313';
export function Component5313({ value = 5313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5313, 'data-value': derived.doubled }, children);
}
export default Component5313;
