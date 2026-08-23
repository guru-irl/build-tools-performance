import React from 'react';
const LABEL_4699 = 'component_4699';
export function Component4699({ value = 4699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4699, 'data-value': derived.doubled }, children);
}
export default Component4699;
