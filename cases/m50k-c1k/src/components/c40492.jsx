import React from 'react';
const LABEL_40492 = 'component_40492';
export function Component40492({ value = 40492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40492, 'data-value': derived.doubled }, children);
}
export default Component40492;
