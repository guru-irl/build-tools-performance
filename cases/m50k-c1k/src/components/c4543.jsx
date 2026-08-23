import React from 'react';
const LABEL_4543 = 'component_4543';
export function Component4543({ value = 4543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4543, 'data-value': derived.doubled }, children);
}
export default Component4543;
