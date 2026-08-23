import React from 'react';
const LABEL_40580 = 'component_40580';
export function Component40580({ value = 40580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40580, 'data-value': derived.doubled }, children);
}
export default Component40580;
