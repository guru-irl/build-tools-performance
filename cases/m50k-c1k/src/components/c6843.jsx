import React from 'react';
const LABEL_6843 = 'component_6843';
export function Component6843({ value = 6843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6843, 'data-value': derived.doubled }, children);
}
export default Component6843;
