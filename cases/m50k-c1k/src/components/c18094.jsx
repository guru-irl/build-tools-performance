import React from 'react';
const LABEL_18094 = 'component_18094';
export function Component18094({ value = 18094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18094, 'data-value': derived.doubled }, children);
}
export default Component18094;
