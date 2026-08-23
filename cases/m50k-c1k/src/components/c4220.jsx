import React from 'react';
const LABEL_4220 = 'component_4220';
export function Component4220({ value = 4220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4220, 'data-value': derived.doubled }, children);
}
export default Component4220;
