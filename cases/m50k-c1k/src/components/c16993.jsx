import React from 'react';
const LABEL_16993 = 'component_16993';
export function Component16993({ value = 16993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16993, 'data-value': derived.doubled }, children);
}
export default Component16993;
