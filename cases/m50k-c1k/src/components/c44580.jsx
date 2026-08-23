import React from 'react';
const LABEL_44580 = 'component_44580';
export function Component44580({ value = 44580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44580, 'data-value': derived.doubled }, children);
}
export default Component44580;
