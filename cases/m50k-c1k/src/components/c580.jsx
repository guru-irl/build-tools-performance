import React from 'react';
const LABEL_580 = 'component_580';
export function Component580({ value = 580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_580, 'data-value': derived.doubled }, children);
}
export default Component580;
