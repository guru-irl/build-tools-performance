import React from 'react';
const LABEL_18543 = 'component_18543';
export function Component18543({ value = 18543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18543, 'data-value': derived.doubled }, children);
}
export default Component18543;
