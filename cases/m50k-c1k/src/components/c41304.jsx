import React from 'react';
const LABEL_41304 = 'component_41304';
export function Component41304({ value = 41304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41304, 'data-value': derived.doubled }, children);
}
export default Component41304;
