import React from 'react';
const LABEL_34543 = 'component_34543';
export function Component34543({ value = 34543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34543, 'data-value': derived.doubled }, children);
}
export default Component34543;
