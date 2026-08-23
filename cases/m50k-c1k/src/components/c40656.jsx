import React from 'react';
const LABEL_40656 = 'component_40656';
export function Component40656({ value = 40656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40656, 'data-value': derived.doubled }, children);
}
export default Component40656;
