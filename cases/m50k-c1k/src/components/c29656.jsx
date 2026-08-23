import React from 'react';
const LABEL_29656 = 'component_29656';
export function Component29656({ value = 29656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29656, 'data-value': derived.doubled }, children);
}
export default Component29656;
