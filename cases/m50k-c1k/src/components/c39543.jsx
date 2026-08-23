import React from 'react';
const LABEL_39543 = 'component_39543';
export function Component39543({ value = 39543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39543, 'data-value': derived.doubled }, children);
}
export default Component39543;
