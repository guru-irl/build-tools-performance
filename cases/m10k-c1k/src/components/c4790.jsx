import React from 'react';
const LABEL_4790 = 'component_4790';
export function Component4790({ value = 4790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4790, 'data-value': derived.doubled }, children);
}
export default Component4790;
