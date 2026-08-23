import React from 'react';
const LABEL_28816 = 'component_28816';
export function Component28816({ value = 28816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28816, 'data-value': derived.doubled }, children);
}
export default Component28816;
