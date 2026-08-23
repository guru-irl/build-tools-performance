import React from 'react';
const LABEL_31924 = 'component_31924';
export function Component31924({ value = 31924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31924, 'data-value': derived.doubled }, children);
}
export default Component31924;
