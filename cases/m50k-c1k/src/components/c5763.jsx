import React from 'react';
const LABEL_5763 = 'component_5763';
export function Component5763({ value = 5763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5763, 'data-value': derived.doubled }, children);
}
export default Component5763;
