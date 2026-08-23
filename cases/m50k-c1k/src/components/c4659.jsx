import React from 'react';
const LABEL_4659 = 'component_4659';
export function Component4659({ value = 4659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4659, 'data-value': derived.doubled }, children);
}
export default Component4659;
