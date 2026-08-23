import React from 'react';
const LABEL_36595 = 'component_36595';
export function Component36595({ value = 36595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36595, 'data-value': derived.doubled }, children);
}
export default Component36595;
