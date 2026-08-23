import React from 'react';
const LABEL_40008 = 'component_40008';
export function Component40008({ value = 40008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40008, 'data-value': derived.doubled }, children);
}
export default Component40008;
