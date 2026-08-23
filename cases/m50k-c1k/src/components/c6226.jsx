import React from 'react';
const LABEL_6226 = 'component_6226';
export function Component6226({ value = 6226, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6226, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6226, 'data-value': derived.doubled }, children);
}
export default Component6226;
