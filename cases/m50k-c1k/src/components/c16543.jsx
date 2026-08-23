import React from 'react';
const LABEL_16543 = 'component_16543';
export function Component16543({ value = 16543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16543, 'data-value': derived.doubled }, children);
}
export default Component16543;
