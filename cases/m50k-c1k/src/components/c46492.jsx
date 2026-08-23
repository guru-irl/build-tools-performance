import React from 'react';
const LABEL_46492 = 'component_46492';
export function Component46492({ value = 46492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46492, 'data-value': derived.doubled }, children);
}
export default Component46492;
