import React from 'react';
const LABEL_5543 = 'component_5543';
export function Component5543({ value = 5543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5543, 'data-value': derived.doubled }, children);
}
export default Component5543;
