import React from 'react';
const LABEL_24492 = 'component_24492';
export function Component24492({ value = 24492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24492, 'data-value': derived.doubled }, children);
}
export default Component24492;
