import React from 'react';
const LABEL_24543 = 'component_24543';
export function Component24543({ value = 24543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24543, 'data-value': derived.doubled }, children);
}
export default Component24543;
