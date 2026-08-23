import React from 'react';
const LABEL_27008 = 'component_27008';
export function Component27008({ value = 27008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27008, 'data-value': derived.doubled }, children);
}
export default Component27008;
