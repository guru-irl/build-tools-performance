import React from 'react';
const LABEL_7607 = 'component_7607';
export function Component7607({ value = 7607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7607, 'data-value': derived.doubled }, children);
}
export default Component7607;
